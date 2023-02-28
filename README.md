# Plano de Teste

**QA Store - Loja Integrada**

*versão 1.0*

## Histórico das alterações

   Data    | Versão |    Descrição   | Autor(a)
-----------|--------|----------------|-----------------
28/02/2021 |  1.0   | Release incial | Bruno Carius


## 1 - Introdução

Este documento descreve os requisitos a testar, os  tipos de testes definidos para cada iteração, os recursos de hardware e software a serem empregados e o cronograma dos testes ao longo do projeto. As seções referentes aos requisitos, recursos e cronograma servem para permitir ao gerente do projeto acompanhar a evolução dos testes.

Com esse documento, você deve:
- Identificar informações de projeto existentes e os componentes de software que devem ser testados.
- Listar os Requisitos a testar.
- Recomendar e descrever as estratégias de teste a serem empregadas.
- Identificar os recursos necessários e prover uma estimativa dos esforços de teste.
- Listar os elementos resultantes do projeto de testes.

Também é possível apresentar aqui o programa que será testado.

## 2 - Requisitos a Testar

- Usuário deve ter frete grátis ao inserir cupom "FRETEGRATIS" no carrinho
- Usuário deve ter 10% de desconto ao inserir cupom "10OFF" no carrinho
- Usuário deve ter 30 reais de desconto ao inserir cupom "30REAIS" no carrinho
- Não deve ser possível utilizar um cupom vencido


### Casos de teste

- Validar que usuário tenha frete grátis ao inserir cupom "FRETEGRATIS" no carrinho

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Validar uso do cupom "FRETEGRATIS"
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) Manual
        </th>
        <th colspan="2">
            (x) Automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação (x)
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Equipe de testes
        </th>
    </tr>
</table>
<br/>

1. Dado que tenha um produto adicionado ao carrinho
2. Quando adiciono o cupom "FRETEGRATIS"
3. Então o usuário deve usufruir de frete grátis em sua compra

- Validar que usuário tenha 10% de desconto ao inserir cupom "10OFF" no carrinho

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Validar uso do cupom "10OFF"
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) Manual
        </th>
        <th colspan="2">
            (x) Automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação (x)
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Equipe de testes
        </th>
    </tr>
</table>
<br/>

1. Dado que tenha um produto adicionado ao carrinho
2. Quando adiciono o cupom "10OFF"
3. Então o usuário deve usufruir de 10% de desconto no valor total da compra

- Validar que usuário tenha 30 reais de desconto ao inserir cupom "30REAIS" no carrinho

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Validar uso do cupom "30REAIS"
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) Manual
        </th>
        <th colspan="2">
            (x) Automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação (x)
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Equipe de testes
        </th>
    </tr>
</table>
<br/>

1. Dado que tenha um produto adicionado ao carrinho
2. Quando adiciono o cupom "30REAIS"
3. Então o usuário deve usufruir de 30 reais de desconto no valor total da compra

- Validar que não seja possível usuário utilizar cupom vencido no carrinho

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Validar uso do cupom "CUPOMVENCIDO"
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) Manual
        </th>
        <th colspan="2">
            (x) Automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação (x)
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Equipe de testes
        </th>
    </tr>
</table>
<br/>

1. Dado que tenha um produto adicionado ao carrinho
2. Quando adiciono o cupom "CUPOMVENCIDO"
3. Então o carrinho deve exibir mensagem informando ao usuário que o cupom não é válido

## 3 - Recursos

Esta seção descreve os recursos humanos, de ambiente de teste (hardware e software) e de ferramentas de automatização de testes necessários para execução dos testes que devem ser descritos nas subseções que seguem.

### 3.1 - Ambiente de teste - Software e Hardware

Ambiente de teste: N/A
Sistema operacional: Windows 11 Home Single Language
Browser: Google Chrome versão 110.0.5481.178 (Versão oficial) 64 bits
Software a ser testado: QA Store Desafio (https://qastoredesafio.lojaintegrada.com.br/)

### 3.2 - Ferramenta de teste

Framework de automação: Cypress
Linguagem de programação: JavaScript
Versionamento de código: GitHub
Modo de execução: GitHub Actions/Localmente pelo terminal/Via interface do Cypress


## 4 - Cronograma

Tipo de teste                   | Duração (h) | Data de início | Data de término
--------------------------------|-------------|----------------|-----------------
Planejar teste                  |      1      | 28/02/2023     | 28/02/2023
Executar teste (Manual)         |     0,5     | 28/02/2023     | 28/02/2023
Implementar teste (Automação)   |      3      | 28/02/2023     | 28/02/2023
Executar teste (Automação)      |     0,1     | 28/02/2023     | 28/02/2023
Avaliar teste                   |     0,5     | 28/02/2023     | 28/02/2023
