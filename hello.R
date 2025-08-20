# Simple R script to demonstrate R in Cursor

# Print a welcome message
print("Hello from R in Cursor!")

# Create a simple vector
numbers <- c(1, 2, 3, 4, 5)
print(paste("Sum of numbers:", sum(numbers)))

# Create a simple plot
pdf("simple_plot.pdf")
plot(numbers, main="Simple Plot", xlab="Index", ylab="Value")
dev.off()

# Basic data frame operation
df <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(25, 30, 35)
)
print("Data Frame:")
print(df) 