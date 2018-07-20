<?php
function listaProdutos($abrirConexao) {
$produtos = array();
    $resultado = mysqli_query($abrirConexao, "select * from produtos");

    while($produto = mysqli_fetch_assoc($resultado)) {
        array_push($produtos, $produto);
    }
return $produtos;
}

function insereProduto($abrirConexao, $nome, $preco) {
    $query = "insert into produtos (nome, preco) values ('{$nome}', {$preco})";
    $resultadodainsercao = mysqli_query($abrirConexao, $query);
    return $resultadodainsercao;
}