class _40_ObjectInstances
{
	public final static String color = "Red";
	public final static String bodyType = "Coupe";
	public static String accelerate()
	{
		String motion = "Accelerating...";
		return motion;
	}
}
class _40_FirstObjectInstance
{
	public static void main(String[] args)
	{
		System.out.println("Car paint is " + _40_ObjectInstances.color);
		System.out.println("Car style is " + _40_ObjectInstances.bodyType);
		System.out.println(_40_ObjectInstances.accelerate());
		
		_40_ObjectInstances Porsche = new _40_ObjectInstances();
		System.out.println("Porsche paint is " + Porsche.color);
		System.out.println("Porsche style is " + Porsche.bodyType);
		System.out.println(Porsche.accelerate());
	}
}