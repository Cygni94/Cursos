<?php include("cabecalho.php");
 include("abrir-conexao.php"); 
include("banco-queries.php"); ?>
<?php

$produtos = listaProdutos($abrirConexao);
?>
<table class="table table-striped table-bordered">

<?php
foreach($produtos as $produto) {
?>

    <tr>
        <td><?= $produto['nome'] ?></td>
        <td><?= $produto['preco'] ?></td>
    </tr>

<?php
}
?>
</table>

<?php include("rodape.php");