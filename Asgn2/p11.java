import java.util.*;

class p11
{
	public static void main (String []args)
	{
		
		Scanner sc = new Scanner(System.in);
		double r = sc.nextDouble();
		double p = 2 * Math.PI * r;
        double a = Math.PI * r * r;

        System.out.println("Perimeter is = " + p);
        System.out.println("Area is = " + a);
		
	}
}
		