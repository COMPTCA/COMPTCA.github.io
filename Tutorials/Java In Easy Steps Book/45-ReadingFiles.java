import java.io.*;
class _45_ReadingFiles
{
	public static void main(String[] args)
	{
		try
		{
			FileReader file = new FileReader("45_Oscar.txt");
			BufferedReader buffer = new BufferedReader(file);
			String line = "";
			while ((line = buffer.readLine()) != null)
			{
				System.out.println(line);
			}
			buffer.close();
		}
		catch(IOException e)
		{
			System.out.println("A read error has occured");
		}
	}
}