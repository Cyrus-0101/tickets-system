-- Change UUID based on generated UUIDs in customers table
INSERT INTO tickets (
    customer_id, title, description, completed, mech, created_at, updated_at
) VALUES ('0be5c6f4-4871-4619-a1a6-275cd3a1e1c3', 'Laptop not powering on', 'Customer reported that their laptop does not power on even when plugged in.', false, 'unassigned', now(), now()),
    ('0be5c6f4-4871-4619-a1a6-275cd3a1e1c3', 'Slow computer performance', 'Customer mentioned that their computer is running very slowly.', false, 'unassigned', now(), now()),
    ('0be5c6f4-4871-4619-a1a6-275cd3a1e1c3', 'Virus removal', 'Customer needs virus removal service for their desktop computer.', false, 'unassigned', now(), now()),
    ('1ffea7bf-a80b-4c82-ae1d-015a4d5d0f95', 'Screen replacement', 'Customer needs to replace a cracked screen on their laptop.', false, 'unassigned', now(), now()),
    ('1ffea7bf-a80b-4c82-ae1d-015a4d5d0f95', 'Data recovery', 'Customer accidentally deleted important files and needs data recovery.', false, 'unassigned', now(), now()),
    ('1ffea7bf-a80b-4c82-ae1d-015a4d5d0f95', 'Software installation', 'Customer requested installation of new software.', false, 'unassigned', now(), now()),
    ('53c8d687-78c5-4846-93d0-378029b9a040', 'Wi-Fi connectivity issues', 'Customer is experiencing problems connecting to Wi-Fi.', false, 'unassigned', now(), now()),
    ('53c8d687-78c5-4846-93d0-378029b9a040', 'Keyboard not working', 'Customer reported that the keyboard on their laptop is not functioning.', false, 'unassigned', now(), now()),
    ('53c8d687-78c5-4846-93d0-378029b9a040', 'Overheating problem', 'Customer''s computer is overheating and shutting down frequently.', false, 'unassigned', now(), now()),
    ('a337e952-5224-4776-914c-17b71b4f7eb3', 'Hard drive replacement', 'Customer needs to replace a failing hard drive.', false, 'unassigned', now(), now()),
    ('a337e952-5224-4776-914c-17b71b4f7eb3', 'Operating system upgrade', 'Customer requested an upgrade to the latest operating system.', false, 'unassigned', now(), now()),
    ('a337e952-5224-4776-914c-17b71b4f7eb3', 'Battery replacement', 'Customer needs a replacement for their laptop battery.', false, 'unassigned', now(), now()),
    ('d6851b67-9ef2-499a-8c7f-8d69e78ecb53', 'Printer setup', 'Customer needs help setting up a new printer.', false, 'unassigned', now(), now()),
    ('d6851b67-9ef2-499a-8c7f-8d69e78ecb53', 'Blue screen error', 'Customer''s computer is showing a blue screen error frequently.', false, 'unassigned', now(), now()),
    ('d6851b67-9ef2-499a-8c7f-8d69e78ecb53', 'Memory upgrade', 'Customer requested an upgrade to their computer’s RAM.', false, 'unassigned', now(), now());