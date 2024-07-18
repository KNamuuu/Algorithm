function solution(bridge_length, weight, truck_weights) {
    var answer = 0;

    truck_weights = truck_weights.map((weight) => {
        return { weight, time: 0 };
    });

    let bridge_queue = [];

    while (bridge_queue.length > 0 || truck_weights.length > 0) {
        // bridge_queue에 있는 truck 중 시간이 2초인 요소 제거
        bridge_queue = bridge_queue.filter(
            (truck) => truck.time < bridge_length
        );

        truck_weights.length !== 0 && bridge_queue.push(truck_weights[0]);

        const total_weight = bridge_queue
            .map((truck) => truck?.weight)
            .reduce((a, b) => a + b, 0);

        if (total_weight > weight) bridge_queue.pop();
        else truck_weights.shift();

        // bridge_queue에 있는 truck의 시간을 1초 올림
        bridge_queue.forEach((truck) => truck.time++);
        answer++;
    }

    return answer;
}