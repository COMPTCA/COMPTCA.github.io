class _28_DoingMathematics
{
	public static void main(String[] args)
	{
		float radius = Float.parseFloat(args[0]);
		float shortPi = (float) Math.PI;
		
		float circ = shortPi * (radius * 2);
		float area = shortPi * (radius * radius);
		
		System.out.println("");
		System.out.println("With Pi commmuted from " + Math.PI + " to " + shortPi + "...");
		System.out.println("A circle with radius " + radius + "cm " + "has a circumference of " + circ + "cm" + " and an area of " + area + "cm.sq");
		System.out.println("");
		
		int num = Integer.parseInt(args[1]);
		
		int square = (int) Math.pow(num, 2);
		int cube = (int) Math.pow(num, 3);
		int sqrt = (int) Math.sqrt(num);
		
		System.out.println("");
		System.out.println(num + " squared is " + square);
		System.out.println(num + " cubed is " + cube);
		System.out.println("Squared root of " + num + " is " + sqrt);
		System.out.println("");
	}
}