/*
The rgb function is incomplete. Complete it so that passing in RGB decimal 
values will result in a hexadecimal representation being returned. Valid 
decimal values for RGB are 0 - 255. Any values that fall out of that range 
must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 
3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b){
    function hexadec(h) {
        if (h >= 255 ) return "FF";
        if (h <= 0) return "00";  
        return h.toString(16).toUpperCase();
    }
    return hexadec(r) + hexadec(g) + hexadec(b);
}

/* ---ARBA---
function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}
-----ARBA----
function rgb(r, g, b){
function toHex(num) {
  if (num <= 0)   return '00';
  if (num >= 255)  return 'FF';
  return num.toString(16).toUpperCase();
}
return toHex(r) + toHex(g) + toHex(b);
}
*/

test("Basic Tests", () => {
    expect(rgb(0, 0, 0)).toBe('000000');
    expect(rgb(0, 0, -20)).toBe('000000');
    expect(rgb(300,255,255)).toBe('FFFFFF');
    expect(rgb(173,255,47)).toBe('ADFF2F');
  });