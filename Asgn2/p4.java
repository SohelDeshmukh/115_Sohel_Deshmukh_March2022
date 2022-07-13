import java.util.*;

class p4
{
	public static void main (String []args)
	{
	
	Scanner Testdata = new Scanner (System.in);
	
	int i = Testdata.nextInt();
	int j = Testdata.nextInt();
	int k = Testdata.nextInt();
	System.out.println(-i+j*k);
	
	int x = Testdata.nextInt();
	int y = Testdata.nextInt();
	int z = Testdata.nextInt();
	System.out.println((x+y)%z);
	
	int p = Testdata.nextInt();
	int q = Testdata.nextInt();
	int r = Testdata.nextInt();
	int s = Testdata.nextInt();
	System.out.println(p+((-q*r)/s));
	
	int n1 = Testdata.nextInt();
	int n2 = Testdata.nextInt();
	int n3 = Testdata.nextInt();
	int n4 = Testdata.nextInt();
	int n5 = Testdata.nextInt();
	int n6 = Testdata.nextInt();
	System.out.println(n1+n2/n3*n4-n5%n6);
	
	}
}