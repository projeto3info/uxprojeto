<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['imagem'])) {
    $para = "mailto:ivannevesc@outlook.com"; // Substitua pelo seu endereço de e-mail.
    $assunto = "Imagem enviada pelo usuário";
    $mensagem = "Uma imagem foi enviada pelo usuário.";
    $arquivo = $_POST['imagem'];

    $headers = "From: seu_email@seudominio.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"boundary\"\r\n";

    $mensagem .= "\r\n--boundary\r\n";
    $mensagem .= "Content-Type: application/octet-stream; name=\"" . basename($arquivo) . "\"\r\n";
    $mensagem .= "Content-Transfer-Encoding: base64\r\n";
    $mensagem .= "Content-Disposition: attachment; filename=\"" . basename($arquivo) . "\"\r\n";
    $mensagem .= chunk_split(base64_encode(file_get_contents($arquivo)));

    if (mail($para, $assunto, $mensagem, $headers)) {
        echo "E-mail com a imagem foi enviado com sucesso.";
    } else {
        echo "Falha ao enviar o e-mail.";
    }
} else {
    echo "O campo 'imagem' não foi enviado no formulário.";
}
?>
