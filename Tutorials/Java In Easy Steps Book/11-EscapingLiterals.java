class _11_EscapingLiterals
{
	public static void main(String[] args)
	{
		String header = "\n\tNEW YORK 3-DAY FORECAST:\n";
		header += "\n\tDAY\t\tHIGH\tLOW\tCONDITIONS\n";
		header += "\t---\t\t-----\t---\t----------\n";
		
		String forecast = "\tSunday\t\t68F\t48F\tSunny\n";
		forecast += "\tMonday\t\t69F\t57F\tSunny\n";
		forecast+= "\tTuesday\t\t71F\t50F\tCloudy\n";
		
		System.out.print(header + forecast);
	}
}