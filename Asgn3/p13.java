import java.util.*;
class p13
{
	public static void main(String[]args)
	{
		
		for(int i=1; i<=5; i++)
		{
			for(int j=1; j<=5-i; j++)
			{
			System.out.print(" ");
			}
			for(int j=1; j<=i; j++)
			{
			int k = i+64;
			System.out.print((char)k+" ");
			}
		System.out.println();
		}
	
	}
}