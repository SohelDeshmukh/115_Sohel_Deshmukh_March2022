import java.util.*;
class p9
{
	public static void main(String[]args)
	{
		
		for(int i=65; i<=69; i++)
		{
			for(int j=1; j<=69-i; j++) // inner loop for spaces
			{
			System.out.print(" ");
			}
			for(int j=65; j<=i; j++)
			{
			System.out.print((char)j+" ");
			}
		System.out.println();
		}
	
	}
}