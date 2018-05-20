class _35_MultipleMethods
{
	public static void main(String[] args1)
	{
		System.out.println("Message from the main method.");
		sub();
		System.out.println(write(12));
		System.out.println(write("Twelve"));
		System.out.println(write(4, 16));
	}
	
	public static void sub()
	{
		System.out.println("Message from the sub method.");
	}
	
	public static String write(int num) 						{return ("Integer passed is " + num);}
	public static String write(String num)					 {return ("String passed is " + num);}
	public static String write(int num1, int num2)	 {return ("Sum total is " + (num1 * num2));}
}