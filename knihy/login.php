<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=edb;charset=utf8', 'root', '', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
} catch (PDOException $e) {
    echo "Připojení do BD selhalo: " . $e->getMessage();
}
