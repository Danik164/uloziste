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
    <div class="container-sm text-center mt-5">
        <h1>Vložení knihy</h1>
        <form action="sc_vkladani.php" method="POST">

            <div class="mb-3">
                <div class="text-start"> <label class="form-label">ISBN:</label></div>
                <input type="text" class="form-control" name="isbn">
            </div>
            <div class="mb-3">
                <div class="text-start"> <label class="form-label">jmeno_autora</label></div>
                <input type="text" class="form-control" name="jmeno_autora">
            </div>
            <div class="mb-3">
                <div class="text-start"> <label class="form-label">prijmeni_autora</label></div>
                <input type="text" class="form-control" name="prijmeni_autora">
            </div>

            <div class="mb-3">
                <div class="text-start"> <label class="form-label">nazev</label></div>
                <input type="text" class="form-control" name="nazev">
            </div>
            <div class="mb-3">
                <div class="text-start"> <label class="form-label">popis</label></div>

                <textarea class="form-control" name="popis"></textarea>
            </div>
            <div class="mb-3">
                <div class="text-start"> <label class="form-label">obrazek</label></div>
                <input type="text" class="form-control" name="obrazek">
            </div>
            <div class="text-end">
                <button type="submit" class="btn btn-success">Vložit</button>

            </div>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>