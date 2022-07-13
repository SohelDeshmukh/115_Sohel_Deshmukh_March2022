import java.util.*;
import java.math.RoundingMode;
import java.text.DecimalFormat;

class p13
{
	public static void main (String []args)
	{
		DecimalFormat df = new DecimalFormat("0.00");
		double width = 5.6;
        double height = 8.5;

        double p = 2*(height + width);
		
        double a = width * height;			
		
		System.out.println("Area is 5.6 * 8.5 = "+df.format(a));
		System.out.println("Perimeter is 2 * (5.6 + 8.5) = "+df.format(p));
		
	}
}
		