class _39_CreatingObjectClass
{
	public final static String color = "Red";
	public final static String bodyType = "Coupe";
	public static String accelerate()
	{
		String motion = "Accelerating...";
		return motion;
	}
}
class _39_FirstObjectClass
{
	public static void main (String[] args)
	{
		System.out.println("Point is " + _39_CreatingObjectClass.color);
		System.out.println("Style is " + _39_CreatingObjectClass.bodyType);
		System.out.println(_39_CreatingObjectClass.accelerate());
	}
}