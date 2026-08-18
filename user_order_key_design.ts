
// 1. TypeScript interface for a DynamoDB Order Item with Composite Keys
export interface DynamoDBOrderItem {
    PK: string                  // Partition Key: e.g. "USER#usr_1001"
    SK: string                  // Sort Key: e.g. "ORDER#2026-08-18T11:00:00Z#ord_5001"
    orderId: string
    userId: string
    totalAmount: number
    status: "PENDING" | "PROCESSING" | "SHIPPED" | "DELIVERED"
}

// 2. Helper functions to format partition and sort keys reliably
export function formatUserPartitionKey(userId: string): string {
    return `USER#${userId}`
}

export function formatOrderSortKey(createdAtIso: string, orderId: string): string {
    return `ORDER#${createdAtIso}#${orderId}`
}

// 3. Demo execution showing sample generated item keys
 function runKeyDesignDemo(): void {
    const userId = "usr_9988"
    const orderId = "ord_4455"
    const now = new Date().toISOString()

    const orderItem: DynamoDBOrderItem = {
        PK: formatUserPartitionKey(userId),
        SK: formatOrderSortKey(now, orderId),
        orderId,
        userId,
        totalAmount: 149.99,
        status: "PROCESSING",
    };

    console.log("=========================================")
    console.log("CHAPTER 2 — DynamoDB Key Design & Modeling")
    console.log("=========================================\n")
    console.log("Formatted Composite Keys:")
    console.log("Partition Key (PK):", orderItem.PK)
    console.log("Sort Key (SK):     ", orderItem.SK)
    console.log("\nFull Order Item Payload:")
    console.log(JSON.stringify(orderItem, null, 2))
}

runKeyDesignDemo();