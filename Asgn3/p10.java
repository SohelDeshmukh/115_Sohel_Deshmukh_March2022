import java.util.*;
class p10
{
	public static void main(String[]args)
	{
		
		for(int i=5; i>=1; i--)
        {
            for(int j=i-1; j>=1; j--)   //for adding spaces
            {
                System.out.print(" ");
            }

            for(int j=64; j<=69-i; j++) //adding numbers
            {                
				int k = i+j;
                System.out.print((char)k+" ");  
            }

            System.out.println();
        }

	
	}
}