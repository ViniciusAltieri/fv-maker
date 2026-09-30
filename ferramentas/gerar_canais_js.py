"""Gera dados/canais.js a partir da exportação do banco em dados/mkt_*/.

O index.html usa esse arquivo quando é aberto fora do claude.ai (GitHub Pages,
outro servidor estático ou direto do disco), onde não existe o banco do artefato.
Rode de novo depois de reexportar dados/.

    python ferramentas/gerar_canais_js.py
"""
import datetime
import json
import pathlib

RAIZ = pathlib.Path(__file__).resolve().parent.parent
DADOS = RAIZ / "dados"


def colecao(nome):
    pasta = DADOS / nome
    return {f.stem: json.loads(f.read_text(encoding="utf8")) for f in sorted(pasta.glob("*.json"))}


def main():
    passos = [dict(doc, id=doc_id) for doc_id, doc in colecao("mkt_passos").items()]
    passos.sort(key=lambda p: p.get("ordem", 0))
    pacote = {
        # meio-dia evita que o fuso do navegador mostre o dia anterior
        "exportado_em": datetime.date.today().isoformat() + "T12:00:00",
        "canais": colecao("mkt_canais"),
        "passos": passos,
        "paginas": colecao("mkt_paginas"),
        "calc": colecao("mkt_calc"),
    }
    corpo = json.dumps(pacote, ensure_ascii=False, indent=1)
    destino = DADOS / "canais.js"
    destino.write_text(
        "// Gerado por ferramentas/gerar_canais_js.py — não edite à mão.\n"
        "window.FV_DADOS = " + corpo + ";\n",
        encoding="utf8",
        newline="\n",
    )
    print(f"{destino.relative_to(RAIZ)}: {len(passos)} passos, {len(pacote['paginas'])} páginas")


if __name__ == "__main__":
    main()
