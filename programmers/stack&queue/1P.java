// https://programmers.co.kr/learn/courses/30/lessons/42584
import java.util.Arrays;

class Solution {
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];
        Arrays.fill(answer, 0);
        for(int i = 0; i < prices.length; i++) {
            int count = 0;
            for(int j = i+1; j < prices.length; j++) {
                count++;
                if(prices[i] > prices[j]) {
                    break;
                }
            }
            answer[i] = count;
        }
        return answer;
    }
}