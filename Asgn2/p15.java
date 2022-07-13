import java.util.*;

class p15
{
	public static void main (String []args)
	{
		Scanner sc = new Scanner(System.in);
		int a, b, t;
		a = sc.nextInt();
		b = sc.nextInt();
		
		System.out.println("Before Swap : a, b = "+a+", "+ + b);
		t = a;
		a = b;
		b = t;   
		System.out.println("After Swapping : a, b = "+a+", "+ + b);
	}
}
		