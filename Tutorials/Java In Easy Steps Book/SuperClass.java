class SuperClass extends _38_ExtendingExistingClass
{
	public static void main(String[] args)
	{
		hello();
		_38_ExtendingExistingClass.hello();
		echo(args[0]);
	}
	public static void hello()
	{
		System.out.println("Hello from the Sub Class");
	}
}