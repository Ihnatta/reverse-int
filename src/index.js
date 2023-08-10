module.exports = function reverse (n) {
    let x = String( Math.abs(n));
    
    let i = 1;
    let result = '';
    let y = x.length;
    
    while ( i <= y ){
        result = result + x[y -i];
        
        i = i + 1;
    }
  return result;
}

