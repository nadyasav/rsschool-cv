# Nadezhda Savkova

## CONTACTS:
**Phone**: +375(29)6544845<br>
**Email**: nadyasav28@gmail.com<br>
**GitHub**: https://github.com/nadyasav/

## ABOUT ME:
I am Junior Web Developer. In current time i work with web projects on freelance. I have an analytical type of mind, i have eagernes to work, and learn new technologes. My strong personal sides: good communication skills, i am a hard working person, able to solve multitasking problems in tense and time-limited schedule.

## TECHNICAL SKILLS:
* HTML
* CSS
* JavaScript
* C#
* SASS(SCSS)

## CODE EXAMPLE
Implement the method that returns index of element in real array for which the sum of the elements to the left of it is equal (within given *accuracy* in the range from 0 to 1) to the sum of the elements on the right. If no such elements exist, return null.
```c#
public static int? FindArrayIndex(double[] array, double accuracy)
{
    if (array != null)
    {
        if (array.Length != 0)
        {
            if (accuracy > 0 && accuracy < 1)
            {
                double sumleft = array[0];
                double sumright = 0;
                int? index = null;

                for (int i = 2; i < array.Length; i++)
                {
                    sumright += array[i];
                }

                for (int i = 1; i < array.Length - 1; i++)
                {
                    if (Math.Abs(sumleft - sumright) <= accuracy)
                    {
                        index = i;
                        return index;
                    }
                    sumleft += array[i];
                    sumright -= array[i + 1];
                }
                return index;
            }
            else
            {
                throw new ArgumentOutOfRangeException();
            }
        }
        else
        {
            throw new ArgumentException();
        }
    }
    else
    {
        throw new ArgumentNullException();
    }
}
```

## EDUCATION:
School of Business and Management of Technology of BSU (DIPLOMA) 2014 - Manager-economist

## LANGUAGES:
* English A2
* Russian(native)
