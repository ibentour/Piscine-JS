function sums(n) {
    if (n < 2) return []
    
    const partitions = []
    const currentPartition = []
    
    // Adds a copy of the current partition to the list of partitions
    const addCurrentPartition = () => {
        partitions.push([...currentPartition])
    }
    
    // Recursively finds all partitions of the number
    const findPartitions = (start, remaining) => {
        if (remaining === 0) {
            addCurrentPartition();
        } else {
            for (let i = start; i <= remaining; i++) {
                currentPartition.push(i);
                findPartitions(i, remaining - i);
                currentPartition.pop();
            }
        }
    };
    findPartitions(1, n);

    // Return all partitions except the last one
    return partitions.slice(0, -1);
}