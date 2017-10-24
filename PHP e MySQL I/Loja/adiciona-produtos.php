<?php include("cabecalho.php");
include("abrir-conexao.php");
include("banco-queries.php") ?>

<?php 
$nome = $_GET["nome"];
$preco = $_GET["preco"];

if(insereProduto($abrirConexao, $nome, $preco)) { ?>
    <p class="text-success">
        Produto <?= $nome; ?>, <?= $preco; ?> adicionado com sucesso!
    </p>
<?php } else {
     $msg = mysqli_error($abrirConexao);
     ?>
    <p class="text-danger">
        Produto <?= $nome; ?> não foi adicionado.
    </p>
<?php } ?>

<?php include("rodape.php"); ?>
