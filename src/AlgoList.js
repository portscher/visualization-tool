import * as algos from './algo';

// After adding the export in algos/index.js, add new algorithms in the following format:
// AlgorithmName: ['Menu Display Name', algos.ClassName, 'Verbose Display Name (optional)']
export const algoMap = {
	ArrayList: ['ArrayList', algos.ArrayList],
	LinkedList: ['Singly LinkedList', algos.LinkedList],
	DoublyLinkedList: ['Doubly LinkedList', algos.DoublyLinkedList],
	CircularlyLinkedList: ['Circularly LinkedList', algos.CircularlyLinkedList],
	StackArray: ['Stack (Array)', algos.StackArray],
	StackLL: ['Stack (LinkedList)', algos.StackLL],
	QueueArray: ['Queue (Array)', algos.QueueArray],
	QueueLL: ['Queue (LinkedList)', algos.QueueLL],
	DequeArray: ['Deque (Array)', algos.DequeArray],
	DequeLL: ['Deque (LinkedList)', algos.DequeLL],
	BST: ['Binary Search Tree', algos.BST],
	Heap: ['Heaps / PQs', algos.Heap],
	SkipList: ['SkipList', algos.SkipList],
	ClosedHash: ['HashMap (Probing)', algos.ClosedHash],
	OpenHash: ['HashMap (Chaining)', algos.OpenHash],
	SplayTree: ['SplayTree', algos.SplayTree],
	AVL: ['AVL', algos.AVL],
	BTree: ['2-4 Tree', algos.BTree],
	RedBlack: ['Red Black Tree', algos.RedBlack],
	BubbleSort: ['Bubble Sort', algos.BubbleSort],
	CocktailSort: ['Cocktail Shaker Sort', algos.CocktailSort],
	InsertionSort: ['Insertion Sort', algos.InsertionSort],
	SelectionSort: ['Selection Sort', algos.SelectionSort],
	QuickSort: ['QuickSort', algos.QuickSort],
	QuickSelect: ['QuickSelect / kᵗʰ Select', algos.QuickSelect],
	MergeSort: ['MergeSort', algos.MergeSort],
	LSDRadix: ['LSD Radix Sort', algos.LSDRadix],
	HeapSort: ['HeapSort', algos.HeapSort],
	BruteForce: ['Brute Force', algos.BruteForce],
	BoyerMoore: ['Boyer-Moore', algos.BoyerMoore],
	KMP: ['KMP', algos.KMP],
	RabinKarp: ['Rabin-Karp', algos.RabinKarp],
	BFS: ['Breadth-First Search', algos.BFS],
	DFS: ['Depth-First Search', algos.DFS],
	Dijkstra: ["Dijkstra's", algos.Dijkstras],
	Prim: ["Prim's", algos.Prims],
	Kruskal: ["Kruskal's", algos.Kruskals],
	LCS: ['LCS', algos.LCS, 'Longest Common Subsequence'],
	Floyd: ['Floyd-Warshall', algos.Floyd],
};

export const algoList = [
	'Lists',
	'ArrayList',
	'LinkedList',
	'DoublyLinkedList',
	'CircularlyLinkedList',
	'Stacks, Queues and Deques',
	'StackArray',
	'StackLL',
	'QueueArray',
	'QueueLL',
	'DequeArray',
	'DequeLL',
	'Trees and SkipList',
	'BST',
	'Heap',
	'AVL',
	'BTree',
	'RedBlack',
	'SplayTree',
	'SkipList',
	'HashMaps',
	'ClosedHash',
	'OpenHash',
	'Sorting and QuickSelect',
	'BubbleSort',
	'CocktailSort',
	'InsertionSort',
	'SelectionSort',
	'QuickSort',
	'QuickSelect',
	'MergeSort',
	'LSDRadix',
	'HeapSort',
	'String Searching',
	'BruteForce',
	'BoyerMoore',
	'KMP',
	'RabinKarp',
	'Graph Algorithms',
	'BFS',
	'DFS',
	'Dijkstra',
	'Prim',
	'Kruskal',
	'Dynamic Programming',
	'LCS',
	'Floyd',
];
