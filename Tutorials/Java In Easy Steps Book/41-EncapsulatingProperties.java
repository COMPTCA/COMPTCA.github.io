class _41_EncapsulatingProperties
{
	private String maker;
	private String color;
	private String bodyType;
	private String accelerate()
	{
		String motion = "Accelerating...";
		return motion;
	}
	public void setCar(String brand, String paint, String style)
	{
		maker = brand;
		color = paint;
		bodyType = style;
	}
	public void getCar()
	{
		System.out.println(maker + " paint is " + color);
		System.out.println(maker + " style is " + bodyType);
		System.out.println(maker + " is " + accelerate() + "\n");
	}
}
class _41_SafeInstance
{
	public static void main(String[] args)
	{
		_41_EncapsulatingProperties Porsche = new _41_EncapsulatingProperties();
		Porsche.setCar("Porsche", "Red", "Coupe");
		Porsche.getCar();
		
		_41_EncapsulatingProperties Bentley = new _41_EncapsulatingProperties();
		Bentley.setCar("Bentley", "Green", "Saloon");
		Bentley.getCar();
	}
}