# Benchmark

This benchmark is bun based, this is an aim to test with bun fastest framworks.

# Results

result are to verbose by running the benchmark you check out the difference your self.

JetPath
200k requests in 10.06s, 25.1 MB read

---

elysia
200k requests in 10.05s, 25.4 MB read

Machine used for the benchmark
friday@uiedbook

---

- OS: EndeavourOS Linux x86_64
- Host: 81MV Lenovo IdeaPad S145-15IWL
- Kernel: 6.4.8-arch1-1
- Shell: bash 5.1.16

This makes Jetpath one of bun's fastest frameworks and also among the fastest on Node and deno.

# how to run this benchmark

clone this repo
bun ins
and run thses scripts

bun run elysia
bun run jetpath
bun run bench

# jetpath-benchmark
