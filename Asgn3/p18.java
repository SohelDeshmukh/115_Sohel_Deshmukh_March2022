import java.util.*;
class p18
{
	public static void main(String[]args)
	{
		
		for(int i=5; i>=1; i--)
		{
			// for(int j=1; j<=5-i; j++)
			// {
			// System.out.print(" ");
			// }
			for(int j=1; j<=i; j++)
			{
			int k = j+64;
			System.out.print((char)k+" ");
			}
		System.out.println();
		}
	
	}
}