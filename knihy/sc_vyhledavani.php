<?php
include("login.php");
try {

    if (empty($_POST["isbn"]) && empty($_POST["jmeno_autora"]) && empty($_POST["prijmeni_autora"]) && empty($_POST["nazev"]) && empty($_POST["popis"])) {
        echo "Musí být vyplněno alespoň jedno kritérium.";
        exit();
    }

    $sql = "SELECT * FROM knihy WHERE isbn LIKE ?   AND jmeno_autora LIKE ? AND prijmeni_autora LIKE ? AND nazev LIKE ? AND popis LIKE ?";



    $isbn = isset($_POST["isbn"]) && $_POST["isbn"] !== '' ? '%' . htmlspecialchars($_POST["isbn"]) . '%' : '%';
    $jmeno_autora = isset($_POST["jmeno_autora"]) && $_POST["jmeno_autora"] !== '' ? '%' . htmlspecialchars($_POST["jmeno_autora"]) . '%' : '%';
    $prijmeni_autora = isset($_POST["prijmeni_autora"]) && $_POST["prijmeni_autora"] !== '' ? '%' . htmlspecialchars($_POST["prijmeni_autora"]) . '%' : '%';
    $nazev = isset($_POST["nazev"]) && $_POST["nazev"] !== '' ? '%' . htmlspecialchars($_POST["nazev"]) . '%' : '%';
    $popis = isset($_POST["popis"]) && $_POST["popis"] !== '' ? '%' . htmlspecialchars($_POST["popis"]) . '%' : '%';

    // Příprava SQL dotazu
    $stmt = $pdo->prepare($sql);

    // Provádění dotazu s hodnotami
    $stmt->execute([$isbn, $jmeno_autora, $prijmeni_autora, $nazev, $popis]);

    // Získání výsledků
    $vys = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
    <!doctype html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>

    <body>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Knihy</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="seznam.php">Seznam knih</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="vkladani.php">Vložit</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="vyhledavani.php">Vyhledávání</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>


        <!-- 

konec navbaru
 
-->

        <div class="container-md text-center">
            <h1>Seznam knih</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ISBN</th>
                        <th scope="col">Jméno autora</th>
                        <th scope="col">Příjmení autora</th>
                        <th scope="col">Název knihy</th>
                        <th scope="col">Popis</th>
                        <th scope="col">Obrázek</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    foreach ($vys as $row) {
                    ?>
                        <tr>

                            <td><?= htmlspecialchars($row["isbn"]) ?></td>
                            <td><?= htmlspecialchars($row["jmeno_autora"]) ?></td>
                            <td><?= htmlspecialchars($row["prijmeni_autora"]) ?></td>
                            <td><?= htmlspecialchars($row["nazev"]) ?></td>
                            <td style="max-width: 230px; word-wrap: break-word; overflow-wrap: break-word;"><?= htmlspecialchars($row["popis"]) ?></td>
                            <td><img src="<?= htmlspecialchars($row['obrazek']) ?>" alt="" style="width=:50px; height: 150px"></td>

                        </tr>
                    <?php
                    }
                    ?>

                </tbody>
            </table>
        </div>




    <?php
} catch (PDOException $e) {
    echo "Chyba: " . $e->getMessage();
}

    ?>







    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>

    </html>