export default function FunctionforLCMandGCD(params: any) {
  if(params){
    console.log("Hye this is only to test the production build and also i have assinged the default values of a and b")
  }
    let a = 5;
    let b = 8;

    function gcd(a: number, b: number): number {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }
    let GCDans = gcd(a, b);
    let LCMans = (a * b) / GCDans;
  return (
    <>
      <p>LCM of {a} and {b} is {LCMans} and there GCD is: {GCDans}</p>
    </>
  );
}
