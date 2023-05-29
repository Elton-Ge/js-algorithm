function towerOfHano(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`moving disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHano(n - 1, fromRod, usingRod, toRod);
  console.log(`moving disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHano(n - 1, usingRod, toRod, fromRod);
}

towerOfHano(4, "A", "C", "B");
//O(2^n)
