import java.util.*;

public class ContainsPair {
    public static void main(String[] args) {
        Random rand = new Random();

        int listLen = rand.nextInt(10);

        List<Integer> test1 = new ArrayList<>();
        for (int i = 1; i < listLen; i++) {
            test1.add(rand.nextInt(20));
        }

        System.out.println(containsPair(test1));
    }

    public static boolean containsPair(List<Integer> inList) {
        System.out.println("checking for pair in " + inList.toString());
        List<Integer> newList = new ArrayList<>();
        for (int i = 0; i < inList.size(); i++) {
            if (newList.contains(inList.get(i))) {
                return true;
            }
            newList.add(inList.get(i));
        }
        return false;
    }
}
