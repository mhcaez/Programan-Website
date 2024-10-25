$tinggi = 5;

for ($i = 1; $i <= $tinggi; $i++) {
    if ($i == 1) {
        echo " .";
    } else {
        echo " ";
    }
    for ($j = $tinggi; $j > $i; $j--) {
        echo " ";
    }
    
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "\n";
}