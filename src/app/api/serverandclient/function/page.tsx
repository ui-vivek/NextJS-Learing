export default function FunctionforLCMandGCD(params: any) {
    let a = params.nums[0];
    let b = params.nums[1];

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
