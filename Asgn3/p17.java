import java.util.*;
class p17
{
	public static void main(String[]args)
	{
		int k = 1;
		for(int i=1; i<=5; i++)
		{
			for(int j=5; j>=6-i; j--)
			{
			System.out.print(k+" ");
			k++;
			}
			// for(int j=1; j<=5-i; j++)
			// {
			// System.out.print(" ");
			// }
			
		System.out.println();
		}
	
	}
}