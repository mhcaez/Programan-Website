$tinggi = 5; // Tentukan tinggi segitiga

for ($i = $tinggi; $i >= 1; $i--) {
    for ($j = $tinggi; $j > $i; $j--) {
        echo " ";
    }
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }

    echo "\n";
}
