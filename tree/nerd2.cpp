#include <iostream>
#include <map>

using namespace std;

map<int, int> coords;

bool isDominated(int x, int y) {
	map<int, int>::iterator it = coords.lower_bound(x);
	if (it == coords.end()) {
		return false;
	}
	return y < it->second;
}

void removeDominated(int x, int y) {
	map<int, int>::iterator it = coords.lower_bound(x);
	if (it == coords.begin()) {
		return;
	}
	--it;
	while (true) {
		if (it->second > y) {
			break;
		}
		if (it == coords.begin()) {
			coords.erase(it);
			break;
		}
		else {
			map<int, int>::iterator jt = it;
			--jt;
			coords.erase(it);
			it = jt;
		}
	}
}

int registerd(int x, int y) {
	if (isDominated(x, y)) {
		return coords.size();
	}
	removeDominated(x, y);
	coords[x] = y;
	return coords.size();
}

int main() {
	int arr[5][5] = {
		{1, 5},
		{ 2, 4 },
		{ 3, 3 },
		{ 4, 2 },
		{ 5, 1 }
	};

	int answer = 0;

	for (int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++) {
		answer += registerd(arr[i][0], arr[i][1]);
	}
	printf("%d", answer);
	getchar();

	return 0;
}