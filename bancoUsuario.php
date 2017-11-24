<?php

cadastraUsuario($conexao,$nome,$email,$senha){
$senha = md5($senha);
$query = "Insert into usuario(nome,email,senha) values({'$nome'},{'$email'},{'$senha'})";
$result = mysqli_query($conexao,$query);

}
BuscaUsuario($conexao,$email,$senha){
    $senhaMd5= md5($senha);
    $email = mysqli_real_escape_string($conexao,$email);
     $query = "select*from usuario where email = '{$email}' and senha = '{$senhaMd5}'";
     $resultado = mysqli_query($conexao,$query);
     $usuario = mysqli_fetch_assoc($resultado);
     return $usuario;
}