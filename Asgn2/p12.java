import java.util.*;

class p12
{
	public static void main (String []args)
	{
		
		Scanner sc = new Scanner(System.in);
		System.out.print("Input first number: ");
		int num1 = sc.nextInt();
   
		System.out.print("Input second number: ");
		int num2 = sc.nextInt();
   
		System.out.print("Input third number: ");
		int num3 = sc.nextInt();
		
		int Avg = (num1 + num2 + num3) / 3;

        System.out.println("Average of given three numbers is: "+Avg);
		
	}
}
		