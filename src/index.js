import "./style.css";
import HashMap from "./hash-map";
import HashSet from "./hash-set"

const hashMap = new HashMap;

const hashSet = new HashSet;

const cats = [
	["Seneca", "Calico"],
	["Freya", "Tabby"],
	["Okra", "Tortie"],
	["Nico", "Black"],
	["rOka", "Mixed Up"],
	["Manon", "Internet Cat"],
	["Samsek", "Internet Cat"],
	["Lulu", "Internet Cat"],
	["Chessica", "Stray Cat"],
	["Voodoo", "Stray Cat"],
	["Gilmak", "Internet Cat"],
	["Chuchu", "Internet Cat"],
	["Tuskie", "Stray Cat"],
	["Mia", "Stray Cat"],
	["Tilia", "Stray Cat"],
	["TT", "Internet Cat"],
	["CoCo", "Internet Cat"],
	["Mu", "Stray Cat"],
	["Todo", "Internet Cat"],
	["Dodo", "Internet Cat"],
	["Reagi", "Stray Cat"],
	["Shulgin", "Stray Cat"],
	["Hoffman", "Stray Cat"],
	["DD", "Internet Cat"],
	["Ferg", "Internet Cat"],
	["Lola", "Good Dog"],
	["Olie", "Good Dog"],
];

cats.forEach(cat => {
    hashMap.set(cat[0], cat[1]);
});

// hashMap.set("Joshua", "Rutland");
// hashMap.set("Krysta", "Rutland");

console.log(hashMap.get("Seneca"));

console.log(hashMap.get("Dog"));

console.log(hashMap.get("Nico"));

console.log(hashMap.has("Okra"));

console.log(hashMap.has("Some Guy"));

// hashMap.remove("Nico");

// hashMap.printList();

console.log(`Length of hash map is ${hashMap.length()}.`);

// hashMap.clear();

hashMap.printList();

console.log(hashMap.keys());

console.log(hashMap.values());

console.log(hashMap.entries());

console.log(hashMap.get("Nico"));

cats.forEach(cat => {
    hashSet.set(cat[0], cat[1]);
});

console.log(hashSet.keys());

hashSet.printList();