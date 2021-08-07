function solution(tickets) {
    let answer = [];
    let visited = [];
    let result = [];
    tickets.sort();
    const DFS = (airport, cnt) => {
        result.push(airport);
        
        if (cnt === tickets.length) {
            answer = result;
            return true;
        }
        
        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === airport) {
                visited[i] = true;
                
                if (DFS(tickets[i][1], cnt+1)) return true;
                
                visited[i] = false;
            }
        }
        result.pop();
        return false;
    }
    
    DFS("ICN", 0);
    
    return answer;
    
}