<?php
include("login.php");
try {
    if (empty($_POST["isbn"]) || empty($_POST["jmeno_autora"]) || empty($_POST["prijmeni_autora"]) || empty($_POST["nazev"]) || empty($_POST["popis"])) {
        echo "Některá pole nebyla vyplněna.";
        exit();
    }

    $sql = "INSERT INTO  knihy (isbn, jmeno_autora, prijmeni_autora, nazev, popis, obrazek) VALUES (?, ?, ?, ?, ?, ?)";



    $isbn = htmlspecialchars($_POST["isbn"] ?? '');
    $jmeno_autora = htmlspecialchars($_POST["jmeno_autora"] ?? '');
    $prijmeni_autora = htmlspecialchars($_POST["prijmeni_autora"] ?? '');
    $nazev = htmlspecialchars($_POST["nazev"] ?? '');
    $popis = htmlspecialchars($_POST["popis"] ?? '');
    $obrazek = htmlspecialchars($_POST["obrazek"] ?? '');



    // Příprava SQL dotazu
    $stmt = $pdo->prepare($sql);

    // Provádění dotazu s hodnotami
    $stmt->execute([$isbn, $jmeno_autora, $prijmeni_autora, $nazev, $popis, $obrazek]);


    echo "Data byla úspěšně vložena.";
    header("Location: seznam.php");
} catch (PDOException $e) {

    echo "Chyba";
}
