<?php
require 'koneksi.php';

if (isset($_SESSION['login'])) {
    echo "
    <script>
    alert('Anda Sudah Login')
    document.location.href = 'index.php'
    </script>
    ";
}

?>

<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from brandio.io/envato/iofrm/html/login19.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 17 Mar 2025 18:16:20 GMT -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ibu Hamil</title>
    <link rel="stylesheet" type="text/css" href="assets/login/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/login/css/fontawesome-all.min.css">
    <link rel="stylesheet" type="text/css" href="assets/login/css/iofrm-style.css">
    <link rel="stylesheet" type="text/css" href="assets/login/css/iofrm-theme19.css">
</head>

<body>
    <div class="form-body without-side">
        <div class="website-logo">
            <a href="index.html">
                <div class="logo">
                    <img class="logo-size" src="assets/assets/images/lgo/logo.png" alt="">
                </div>
            </a>
        </div>
        <div class="iofrm-layout">
            <div class="img-holder">
                <div class="bg"></div>
                <div class="info-holder">
                    <img src="assets/login/images/graphic3.svg" alt="">
                </div>
            </div>
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>LOGIN</h3>
                        <p>Silahkan Login Akun Anda</p>
                        <form method="post" action="service/function.php">
                            <input class="form-control" type="email" name="email" placeholder="E-mail Address" required>
                            <input class="form-control" type="password" name="password" placeholder="Password" required>
                            <div class="form-button">
                                <button id="submit" type="submit" name="login" class="ibtn">LOGIN</button>
                            </div>
                        </form>
                        <div class="form-button">
                            <a href="index.php">
                                <button id="submit" class="ibtn">KEMBALI</button>
                            </a>
                        </div>
                        <div class="other-links social-with-title">
                            <!-- <div class="text">Or login with</div>
                            <a href="#"><i class="fab fa-facebook-f"></i>Facebook</a><a href="#"><i class="fab fa-google"></i>Google</a><a href="#"><i class="fab fa-linkedin-in"></i>Linkedin</a> -->
                        </div>

                        <div class="page-links mt-2">
                            <a href="register.php">Registrasi Akun Baru</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/login/js/jquery.min.js"></script>
    <script src="assets/login/js/popper.min.js"></script>
    <script src="assets/login/js/bootstrap.bundle.min.js"></script>
    <script src="assets/login/js/main.js"></script>
</body>

<!-- Mirrored from brandio.io/envato/iofrm/html/login19.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 17 Mar 2025 18:16:21 GMT -->

</html>