import java.util.*;
class p8
{
	public static void main(String[]args)
	{
		
		for(int i=5; i>=1; i--)
        {
            for(int j=i-1; j>=1; j--)   //for adding spaces
            {
                System.out.print(" ");
            }

            for(int j=0; j<=5-i; j++) //adding numbers
            {                
                System.out.print((i+j)+" ");  
            }

            System.out.println();
        }

	
	}
}