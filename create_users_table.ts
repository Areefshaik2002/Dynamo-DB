import { CreateTableCommandInput } from "@aws-sdk/client-dynamodb"

// 1. TypeScript Interface representing a User Item in our DynamoDB table
export interface UserItem {
    userId: string       // Partition Key (HASH)
    name: string         // Attribute
    email: string        // Attribute
    age: number          // Attribute
    skills: string[]     // Attribute (List)
    isVerified: boolean  // Attribute (Boolean)
}

// 2. DynamoDB Table Definition Payload
export const createUsersTableInput: CreateTableCommandInput = {
    TableName: "Users",
    AttributeDefinitions: [
        {
            AttributeName: "userId",
            AttributeType: "S" // "S" = String, "N" = Number, "B" = Binary
        }
    ],
    KeySchema: [
        {
            AttributeName: "userId",
            KeyType: "HASH" // HASH = Partition Key
        }
    ],
    BillingMode: "PAY_PER_REQUEST", // On-demand billing model
}


// 3. Helper Function to simulate creating the table
function displayTableImplementation(): void {
    console.log("=========================================")
    console.log("CHAPTER 1 — DynamoDB Table Implementation")
    console.log("=========================================\n")

    console.log("1. Table Creation Payload (@aws-sdk/client-dynamodb):");
    console.log(JSON.stringify(createUsersTableInput, null, 2))

     // 4. Create sample items showing schemaless flexibility
     const user1: UserItem = {
        userId: "usr_1001",
        name: "Alice Jhonson",
        email: "Alice.Jhonson@gmail.com",
        age: 24,
        skills: ["Node.js", "Typescript"],
        isVerified: true
     }

       const user2: UserItem = {
        userId: "usr_1002",
        name: "Bob Smith",
        email: "bob.smith@gmail.com",
        age: 35,
        skills: ["DynamoDB", "AWS"],
        isVerified: false,
    }

    console.log("\n2. Sample Items to store in this table:");
    console.log("User 1:", user1);
    console.log("User 2:", user2);
}

displayTableImplementation();