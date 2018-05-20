class _22_PassingArguments
{
	public static void main(String[] args)	
	{
		if (args[0].equals("-en")) 
		{
			System.out.println("English Option");
		}
		else if (args[0].equals("-es")) 
		{
			System.out.println("Spanish Option");
		}
		else System.out.println("Unrecognized Option");
	}
}